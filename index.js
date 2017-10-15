#!/usr/bin/env node

const http = require('http'),
	fs = require('fs'),
	path = require('path');

http.createServer((req, res) => {
	const filePath = './public' + req.url,
		extname = path.extname(filePath);
	let contentType = 'text/html';

	switch (extname) {
		case '.js':
			contentType = 'text/javascript';
			break;
		case '.css':
			contentType = 'text/css';
			break;
		case '.json':
			contentType = 'application/json';
			break;
		case '.png':
			contentType = 'image/png';
			break;
		case '.jpg':
			contentType = 'image/jpg';
			break;
	}

	fs.readFile(filePath, (err, content) => {
		if (err) {
			switch (err.code) {
				case 'EISDIR':
					res.writeHead(302, {
						'Location': path.join(req.url, 'index.html')
					});
					res.end();
					break;
				case 'ENOENT':
					res.writeHead(404);
					res.end('404 NotFound', 'utf-8');
					break;
				default:
					res.writeHead(500);
					res.end('Error: ' + err.code + ' ..\n');
			}
		} else {
			res.writeHead(200, {
				'Content-Type': contentType
			});
			res.end(content, 'utf-8');
		}
	});

}).listen(8855);
console.log('Server running at http://localhost:8855/');
