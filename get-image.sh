echo Building Image

docker build . --tag bia.web

echo Image built

docker save bia.web > biaweb.tar

echo Image saved
