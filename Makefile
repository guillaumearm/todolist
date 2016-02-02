####################################################
#### docker-helper.mk by trapcodien@hotmail.fr #####
####################################################

### GLOBAL USER ENV PUBLIC VARIABLES ###
CONTAINER_BASE 		?= redp
PROJECT_NAME 		?= todolist
CURRENT_VERSION		?= latest
DAEMON_MODE			?= 1

################################################################################
### PRIVATE ###
EXPOSED_PORTS		:= 80 8080 $(DOCKER_PORTS)
FULL_IMAGE_NAME		:= $(CONTAINER_BASE)/$(PROJECT_NAME):$(CURRENT_VERSION)
FULL_CONTAINER_NAME	:= $(CONTAINER_BASE)_$(PROJECT_NAME)_$(CURRENT_VERSION)
DOCKERFLAGS			:= $(foreach x,$(EXPOSED_PORTS),-p $(x):$(x) )

DOCKER_STATUS		:= $(shell docker ps | grep $(FULL_CONTAINER_NAME))

DOCKERFLAGS			+= -v $(shell pwd):/www

ifeq ($(DAEMON_MODE),1)
  DAEMON_MODE_DESC := "Daemon mode : \t\t\t\t ON"
else
  DAEMON_MODE_DESC := "Daemon mode : \t\t\t\t OFF"
endif

### RULES ###
help: print_header
	@echo "$(DOCKERFLAGS)"
	@echo "Image name will be named : \t\t $(CONTAINER_BASE)/$(PROJECT_NAME):$(CURRENT_VERSION)"
	@echo "Container name will be named : \t\t $(CONTAINER_BASE)_$(PROJECT_NAME)_$(CURRENT_VERSION)"
	@echo $(DAEMON_MODE_DESC)
	@echo
	@echo "User Environments variables :"
	@echo "\t CONTAINER_BASE"
	@echo "\t PROJECT_NAME"
	@echo "\t CURRENT_VERSION (could be latest)"
	@echo "\t DAEMON_MODE (could be 1 or 0)"
	@echo
	@echo "Rules :"
	@echo "\t build: \t build docker image."
	@echo "\t run: \t\t run container. (example: docker run DAEMON_MODE=0)"
	@echo "\t run_shell: \t run container with zsh"
	@echo "\t attach: \t attach a container"
	@echo "\t stop: \t\t stop current process"
	@echo "\t stop_all: \t stop all CONTAINER_BASE processes"
	@echo "\t status: \t show status"
	@echo "\t logs: \t\t show stdout/stderr"
	@echo "\t clean: \t clean all dangling images"
	@echo "\t fclean: \t clean + stop_all"
	@echo "\t re: \t\t stop + run"

build: print_header clean
	@echo "--- Building $(FULL_IMAGE_NAME) ---"
	@docker build -t $(FULL_IMAGE_NAME) .

run: print_header stop
ifeq ($(DAEMON_MODE),1)
	@docker run -itd --name "$(FULL_CONTAINER_NAME)" $(DOCKERFLAGS) $(FULL_IMAGE_NAME)
	@echo "--- Running $(FULL_CONTAINER_NAME) (in Daemon Mode) ---"
else
	@echo "--- Running $(FULL_CONTAINER_NAME) ---"
	@docker run -it --name "$(FULL_CONTAINER_NAME)" $(DOCKERFLAGS) $(FULL_IMAGE_NAME) || true
endif

run_shell: print_header 
	@echo "--- Running zsh for $(FULL_CONTAINER_NAME) ---"
	@docker run -it --name "$(FULL_CONTAINER_NAME)" $(DOCKERFLAGS) $(FULL_IMAGE_NAME) /bin/zsh || true

attach: print_header
	@echo "--- Attaching $(FULL_CONTAINER_NAME) ---"
	@docker attach $(FULL_CONTAINER_NAME)

stop: print_header
	@echo "--- Stopping $(FULL_CONTAINER_NAME) ---"
	@docker rm -f `docker ps -aq --filter="name=$(FULL_CONTAINER_NAME)"` 2> /dev/null && echo "--- Stopped $(FULL_CONTAINER_NAME) ---" || echo "--- ERROR: Container is not started ---"

stop_all: print_header
	@echo "--- Stopping all $(CONTAINER_BASE) containers ---"
	@docker rm -f `docker ps -aq --filter="name=$(CONTAINER_BASE)"` 2> /dev/null && echo "--- Stopped all $(CONTAINER_BASE) containers ---" || echo "--- ERROR: No containers started ---"

status: print_header
ifeq ($(DOCKER_STATUS),)
	@echo "--- $(FULL_CONTAINER_NAME) is DOWN ---"
else
	@echo "--- $(FULL_CONTAINER_NAME) is UP ---"
endif

logs: print_header
	@docker logs -f $(FULL_CONTAINER_NAME)

clean: print_header
	@echo "--- Cleaning all dangling image ---"
	@docker rmi -f `docker images -q --filter='dangling=true'` 2> /dev/null || true
	@echo "--- Done ---"

fclean: print_header clean stop_all

re: print_header fclean run

print_header:
	@echo -----------------------------------
	@echo ---------- Docker Helper ----------
	@echo -----------------------------------
	@echo

.PHONY: help build run stop stop_all status logs clean fclean re print_header

