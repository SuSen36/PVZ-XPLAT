# start_web_server.ps1

# Change to the directory where the built web files are located
cd pvz-web\src\main\resources\static

Write-Host "Starting Python HTTP server in $(pwd)"

# Start the Python HTTP server
python -m http.server 