
# Instructions

1. Fix the Dockerfile. Build the image and make sure the build succeeds. Try to run the image in a container and verify it runs.

2. Create a config file called `name.txt` and put your name inside the file.

3. Fix the docker-compose. Make sure you place the config file (name file) in the project's root directory.

4. Run the docker container using the `docker stack` command

5. Create a second service using the same docker image used for the previous steps and run it as a separate service called `service2` on the docker compose file.

6. When both services are up and running, make an http request to service1 with the path `/ping`. If you set up the networking successfully, you will receive a 'pong' message from service2.
   If you don't have the tools for an http request, simply type the address in a browser using `localhost` and the respective port

## Useful commands

`docker build -t <image name> .`

`docker logs <container name>`

`docker stack deploy -c docker-compose.yml <stack name>`

`docker stack rm <stack name>`

`docker container ls -a`

`docker service ls`

## Tips

- Tab autocomplete is extremely helpful when working with the docker CLI

- If a container fails at startup, there will be no logs available.

- Remember that you must install dependencies when building the image.
  Different docker images behave differently to the same commands.
  (This means don't just copy dependencies from your local machine to the docker fs. It will eventually break the app.)

- Use the `docker container ls`, `docker container ls -a` and `docker logs <image ID>` command to debug

- Remember to read the application code to find usefule references

- If the instructions tell you to name a file or service a specific name, it's because the code needs it to be so.

- Use all the files in this challenge as references. You might find the info you need in any of them.

- Secrets can be external or can be directly declared in the compose file. External secrets are safer and used in production.
