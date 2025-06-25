.PHONY: installimages
installimages:
	rm  ./src/assets/images/*
	cp -r ~/My\ Drive/dxact-images/* ./src/assets/images
	