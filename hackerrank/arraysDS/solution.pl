#!/usr/bin/perl

$n = <STDIN>;
chomp $n;
$arr_temp = <STDIN>;
@arr = split / /,$arr_temp;
chomp @arr;

$n--;

while ($n >= 0){
    print STDOUT @arr[$n] . " ";
    $n--;
}
