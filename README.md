# Using docker compose to set up an express and postgres project

I used docker to set up an express project and hook it up to a postgres database

### what I learned
- I learnt about bind mounts and what they are important for. I can change live source code without having to rebuild my image after every change
- I learnt about volumes and persisting data. I defined a volume in the postgres service and that is what persists the data in the container even after container removal.

### Next steps?
- I'd like to learn how to create SQL scripts that create the tables when the projcet is loaded up, as well as create fixtures.
- build a simple server rendered app that uses postgres, express, nginx, data fixtures and deploy it on the web.
