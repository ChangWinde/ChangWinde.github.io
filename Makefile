.PHONY: build watch open serve clean setup help

build:
	./scripts/jemdoc

watch:
	./scripts/jemdoc watch

open:
	./scripts/jemdoc open

serve:
	./scripts/jemdoc serve

clean:
	./scripts/jemdoc clean

setup:
	./scripts/jemdoc setup

help:
	./scripts/jemdoc help
