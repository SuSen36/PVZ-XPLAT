# Distributed under the OSI-approved BSD 3-Clause License.  See accompanying
# file Copyright.txt or https://cmake.org/licensing for details.

cmake_minimum_required(VERSION 3.5)

file(MAKE_DIRECTORY
  "C:/Users/Administrator/Desktop/REPVZ-main/mod-project/cmake-build-debug/_deps/bass-src"
  "C:/Users/Administrator/Desktop/REPVZ-main/mod-project/cmake-build-debug/_deps/bass-build"
  "C:/Users/Administrator/Desktop/REPVZ-main/mod-project/cmake-build-debug/_deps/bass-subbuild/bass-populate-prefix"
  "C:/Users/Administrator/Desktop/REPVZ-main/mod-project/cmake-build-debug/_deps/bass-subbuild/bass-populate-prefix/tmp"
  "C:/Users/Administrator/Desktop/REPVZ-main/mod-project/cmake-build-debug/_deps/bass-subbuild/bass-populate-prefix/src/bass-populate-stamp"
  "C:/Users/Administrator/Desktop/REPVZ-main/mod-project/cmake-build-debug/_deps/bass-subbuild/bass-populate-prefix/src"
  "C:/Users/Administrator/Desktop/REPVZ-main/mod-project/cmake-build-debug/_deps/bass-subbuild/bass-populate-prefix/src/bass-populate-stamp"
)

set(configSubDirs )
foreach(subDir IN LISTS configSubDirs)
    file(MAKE_DIRECTORY "C:/Users/Administrator/Desktop/REPVZ-main/mod-project/cmake-build-debug/_deps/bass-subbuild/bass-populate-prefix/src/bass-populate-stamp/${subDir}")
endforeach()
if(cfgdir)
  file(MAKE_DIRECTORY "C:/Users/Administrator/Desktop/REPVZ-main/mod-project/cmake-build-debug/_deps/bass-subbuild/bass-populate-prefix/src/bass-populate-stamp${cfgdir}") # cfgdir has leading slash
endif()
