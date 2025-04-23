#!/bin/bash

echo " _______  _______  _______  _        _______  _______"
echo "(  ____ \(  ____ \(  ___  )( \      (  ____ \(  ___  )"
echo "| (    \/| (    \/| (   ) || (      | (    \/| (   ) |"
echo "| (_____ | (__    | (___) || |      | |      | |   | |"
echo "(_____  )|  __)   |  ___  || |      | |      | |   | |"
echo "      ) || (      | (   ) || |      | |      | |   | |"
echo "/\____) || (____/\| )   ( || (____/\| (____/\| (___) |"
echo "\_______)(_______/|/     \|(_______/(_______/(_______)"

# -e server para habilitar os comando como \n (quebra de linha) 
echo -e "\n \n \n"

echo "formatando código com Prettier..."

(cd Backend/seal-co && npm run format)

echo "Inicializando a toda aplicação..."

./init-compose.sh