#!/bin/sh

set -e

show_help() {
  echo """
  Commands
  --------------------------------------------
  load_db    : Create tables from import.sql
  test       : run the tests
  """
}

case "$1" in
  "load_db" )
   # create the tables
   psql farmers < import.sql
  ;;
  "test" )
   # run all the tests
   npm test
  ;;
  * )
   show_help
  ;;
esac