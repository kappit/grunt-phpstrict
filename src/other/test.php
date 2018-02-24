<?php

function person ($name = 'doe', string $address) {
  return $name . ' ' . $address;
}

echo person('john');

if(2 === 1){
  echo 'not';
}

class A {
  public function __construct() {
    
  }
  
  public function __destruct() {
    
  }
}