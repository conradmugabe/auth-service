IMAGE_NAME := conradmugabe/auth-service

build:
	docker build -t $(IMAGE_NAME) .

test:
	docker run --rm -v $(PWD):/app -v /app/node_modules $(IMAGE_NAME) npm run test

test-coverage:
	docker run --rm -v $(PWD):/app -v /app/node_modules $(IMAGE_NAME) npm run test:coverage