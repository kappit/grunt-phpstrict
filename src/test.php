<?php

function sum (... $ints) : int {
  return array_sum($ints);
}

echo sum(1, 2, 3);

function blob () {
  return null;
}