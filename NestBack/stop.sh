#!/bin/bash

if command -v podman &> /dev/null
then

	echo "Derrubando com Podman"
	podman compose down

elif command -v docker &> /dev/null
then

	echo "Derrubando com Docker"
	docker compose down

else
	echo -e "\033[1;31m[Erro]\033[0m: Nenhum gerenciador de containers encontrado!"
fi

echo "formatando código com Prettier..."

(cd Backend/seal-co && npm run format)

echo -e "\n \n \n"

echo " _______  _______  _______  _        _______  _______"
echo "(  ____ \(  ____ \(  ___  )( \      (  ____ \(  ___  )"
echo "| (    \/| (    \/| (   ) || (      | (    \/| (   ) |"
echo "| (_____ | (__    | (___) || |      | |      | |   | |"
echo "(_____  )|  __)   |  ___  || |      | |      | |   | |"
echo "      ) || (      | (   ) || |      | |      | |   | |"
echo "/\____) || (____/\| )   ( || (____/\| (____/\| (___) |"
echo "\_______)(_______/|/     \|(_______/(_______/(_______)"
