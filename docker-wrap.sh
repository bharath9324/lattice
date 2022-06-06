#!/bin/bash
if [ "$1" == "build" ]; then
	docker build --tag django-image .
elif [ "$1" == "prune" ]; then
	docker system prune -a
elif [ "$1" == "run" ]; then
	docker run -it -p 8000:8000 --network="bridge" -v ~/.gitconfig:/etc/gitconfig -v ~/sideProjects/lattice:/dockerUser/Development --name dev1 django-image
elif [ "$1" == "attach"	 ]; then
	docker attach dev1
else
	printf "Valid arguments are \n build\n prune\n run\n attach\n"
fi
