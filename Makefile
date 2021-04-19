#/
# @license Apache-2.0
#
# Copyright (c) 2021 OmniSci/Quansight.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#/

# VARIABLES #

# Determine the filename:
this_file := $(lastword $(MAKEFILE_LIST))

# Determine the absolute path of the Makefile (see http://blog.jgc.org/2007/01/what-makefile-am-i-in.html):
this_dir := $(dir $(CURDIR)/$(word $(words $(MAKEFILE_LIST)),$(MAKEFILE_LIST)))

# Remove the trailing slash:
this_dir := $(patsubst %/,%,$(this_dir))

# Define the root project directory:
ROOT_DIR ?= $(this_dir)

# Define the directory for documentation:
DOCS_DIR ?= $(ROOT_DIR)/docs

# Define the directory for data:
DATA_DIR ?= $(ROOT_DIR)/data

# Define the directory for scripts:
SCRIPTS_DIR ?= $(ROOT_DIR)/scripts

# Define the root tools directory:
TOOLS_DIR ?= $(ROOT_DIR)/tools

# Define the directory containing the entry point for Makefile dependencies:
TOOLS_MAKE_DIR ?= $(TOOLS_DIR)/make

# Define the subdirectory containing Makefile dependencies:
TOOLS_MAKE_LIB_DIR ?= $(TOOLS_MAKE_DIR)/lib

# Define the path to the root `package.json`:
ROOT_PACKAGE_JSON ?= $(ROOT_DIR)/package.json

# Define the top-level directory containing node module dependencies:
NODE_MODULES ?= $(ROOT_DIR)/node_modules


# RULES #

#/
# Default target.
#
# @example
# make
#
# @example
# make all
#/
all: install

.PHONY: all

#/
# Installs project dependencies.
#
# @example
# make install
#/
install: install-node

.PHONY: install

#/
# Runs the project's cleanup sequence.
#
# @example
# make clean
#/
clean: clean-node

.PHONY: clean


# DEPENDENCIES #

include $(TOOLS_MAKE_DIR)/Makefile
