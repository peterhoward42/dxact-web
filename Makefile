
.PHONY: imagespre
imagespre:
	- rm  ./src/assets/images/*
	rm ~/My\ Drive/dxact-images/*


.PHONY: imagespost
imagespost:
	cp -r ~/My\ Drive/dxact-images/* ./src/assets/images
	
