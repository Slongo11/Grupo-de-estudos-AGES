#!/bin/bash


if command -v podman &> /dev/null
then

	echo "Executando com Podman"
	podman compose up --build -d

elif command -v docker &> /dev/null
then

	echo "Executando com Docker"
	docker compose up --build -d

else
	echo -e "\033[1;31m[Erro]\033[0m: Nenhum gerenciador de containers encontrado!"
fi