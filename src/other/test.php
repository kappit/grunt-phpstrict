<?php

function person ($name = 'doe', string $address) {
  return $name . ' ' . $address;
}

echo person('john');

if(2 === 1){
  echo 'not';
}