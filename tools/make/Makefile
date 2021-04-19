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

# Instruct make to warn us when we use an undefined variable (e.g., misspellings).
MAKEFLAGS += --warn-undefined-variables

# Define the default target:
.DEFAULT_GOAL := all

# Define the `SHELL` variable to avoid issues on systems where the variable may be inherited from the environment.
#
# ## Notes
#
# -   We use `bash` so that we can use `pipefail`.
#
# [1]: https://www.gnu.org/prep/standards/html_node/Makefile-Basics.html#Makefile-Basics
# [2]: http://clarkgrubb.com/makefile-style-guide
SHELL := bash

# Define shell flags.
#
# ## Notes
#
# -   `.SHELLFLAGS` was introduced in GNU Make 3.82 and has no effect on the version of GNU Make installed on Mac OS X, which is 3.81.
# -   The `-e` flag causes `bash` to exit immediately if a `bash` executed command fails.
# -   The `-u` flag causes `bash` to exit with an error message if a variable is accessed without being defined.
# -   The `pipefail` option specifies that, if any of the commands in a pipeline fail, the entire pipeline fails. Otherwise the return value of a pipeline is the return value of the last command.
# -   The `-c` flag is in the default value of `.SHELLFLAGS`, which must be preserved, as this is how `make` passes the script to be executed to `bash`.
#
.SHELLFLAGS := -eu -o pipefail -c

# Remove targets if its recipe fails.
#
# ## Notes
#
# -   Mentioning this target anywhere in a Makefile prevents a user from re-running make and using an incomplete or invalid target.
# -   When debugging, it may be necessary to comment this line out so the incomplete or invalid target can be inspected.
#
# [1]: https://www.gnu.org/software/make/manual/html_node/Special-Targets.html
.DELETE_ON_ERROR:

# Remove all the default suffixes, preferring to define all rules explicitly.
#
# [1]: https://www.gnu.org/software/make/manual/html_node/Suffix-Rules.html#Suffix-Rules
# [2]: https://www.gnu.org/software/make/manual/html_node/Suffix-Rules.html#Suffix-Rules
.SUFFIXES:


# DEPENDENCIES #

# Order is important:
include $(TOOLS_MAKE_DIR)/common.mk
include $(TOOLS_MAKE_DIR)/debug.mk
include $(TOOLS_MAKE_DIR)/help.mk

# Please keep sorted in alphabetical order:
include $(TOOLS_MAKE_LIB_DIR)/node.mk
