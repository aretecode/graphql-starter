## GraphQL Starter

## Docker

1. `yarn build`
2. `docker build .`
3. `docker tag __TAG__ aretecode/modern-stack-portfolio-graphql:v__VERSION__`
4. `docker push aretecode/modern-stack-portfolio-graphql:v__VERSION__`
5. `docker run -d -p 4444:4000 __TAG__`
