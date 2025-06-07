import http.server
import socketserver

PORT = 8000

class Handler(http.server.SimpleHTTPRequestHandler):
    extensions_map = {
        '.html': 'text/html',
        '.wasm': 'application/wasm',
        '': 'application/octet-stream', # Default
    }

    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*') # 允许跨域请求
        super().end_headers()

    def guess_type(self, path):
        if path.endswith('.html'):
            return 'text/html'
        if path.endswith('.wasm'):
            return 'application/wasm'
        return super().guess_type(path)

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("serving at port", PORT)
    httpd.serve_forever() 