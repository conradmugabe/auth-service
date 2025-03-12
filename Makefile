IMAGE_NAME := conradmugabe/auth-service

build:
	docker build -t $(IMAGE_NAME) .

test:
	docker run --rm -v $(PWD):/app $(IMAGE_NAME) npm run test

test-coverage:
	docker run --rm -v $(PWD):/app $(IMAGE_NAME) npm run test:coverage