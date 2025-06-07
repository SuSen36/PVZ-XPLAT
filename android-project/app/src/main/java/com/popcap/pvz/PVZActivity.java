package com.popcap.pvz;

import android.content.Context;
import android.content.SharedPreferences;
import android.content.pm.ActivityInfo;
import android.content.res.AssetManager;
import android.os.Bundle;
import android.widget.Toast;

import org.libsdl.app.SDLActivity;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Objects;


public class PVZActivity extends SDLActivity {

    static {
        System.loadLibrary("SDL2");
        System.loadLibrary("SDL2_mixer_ext");
        System.loadLibrary("re-plants-vs-zombies");
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE); // 强制为横屏
        // 检查是否第一次启动，如果是则执行复制
        SharedPreferences prefs = getSharedPreferences("AppPrefs", Context.MODE_PRIVATE);
        boolean isFirstRun = prefs.getBoolean("isFirstRun", true); // 默认 true 表示首次运行
        if (isFirstRun) {
            copyAssetsToExternalStorage();
            // 更新标志位，标记已运行过
            SharedPreferences.Editor editor = prefs.edit();
            editor.putBoolean("isFirstRun", false);
            editor.apply(); // 使用 apply() 异步保存，避免阻塞主线程
        }
    }

    private void copyAssetsToExternalStorage() {
        AssetManager assetManager = getAssets();
        String[] files;

        try {
            files = assetManager.list(""); // 列出根目录下的文件

            if (files != null && files.length > 0) {
                String dataDirPath = String.valueOf(getExternalFilesDir(null));
                createDataFolder(dataDirPath);

                int fileCount = files.length; // 统计文件数量
                for (String filename : files) {
                    copyAssetFile(assetManager, filename, dataDirPath + "/" + filename);
                }
                Toast.makeText(this, "所有文件复制完成！共 " + fileCount + " 个文件夹。", Toast.LENGTH_SHORT).show();
            } else {
                Toast.makeText(this, "没有可供复制的文件。", Toast.LENGTH_SHORT).show();
            }
        } catch (IOException e) {
            e.printStackTrace();
            Toast.makeText(this, "获取 assets 文件时出错！", Toast.LENGTH_SHORT).show();
        }
    }

    private void createDataFolder(String dataDirPath) {
        File dataDir = new File(dataDirPath);
        if (!dataDir.exists() && dataDir.mkdirs()) {
            Toast.makeText(this, "数据文件夹创建成功！", Toast.LENGTH_SHORT).show();
        } else if (!dataDir.exists()) {
            Toast.makeText(this, "数据文件夹创建失败！", Toast.LENGTH_SHORT).show();
        }
    }

    private void copyAssetFile(AssetManager assetManager, String filename, String destPath) {
        try {
            // 检查是否是目录
            if (Objects.requireNonNull(assetManager.list(filename)).length > 0) {
                File dir = new File(destPath);
                if (!dir.exists()) {
                    dir.mkdirs(); // 确保目录存在
                }

                // 遍历子目录
                String[] subFiles = assetManager.list(filename);
                for (String subFile : subFiles) {
                    copyAssetFile(assetManager, filename + "/" + subFile, destPath + "/" + subFile);
                }
                return; // 处理目录完毕
            }

            // 在复制文件之前检查目标文件是否已存在
            File outFile = new File(destPath);
            if (outFile.exists()) {
                return;
            }

            // 复制文件
            try (InputStream in = assetManager.open(filename);
                 FileOutputStream out = new FileOutputStream(outFile)) {
                byte[] buffer = new byte[1024];
                int read;
                while ((read = in.read(buffer)) != -1) {
                    out.write(buffer, 0, read);
                }
            }

        } catch (IOException e) {
            e.printStackTrace();
            Toast.makeText(this, "复制文件 " + filename + " 时出错！", Toast.LENGTH_SHORT).show();
        }
    }

}