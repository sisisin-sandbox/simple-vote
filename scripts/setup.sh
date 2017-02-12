#!/bin/bash

psql -c 'create database simple_vote_development' postgres
psql -c 'create database simple_vote_test' postgres
psql -c 'create user local' onokori_test
