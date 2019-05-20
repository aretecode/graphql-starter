## GraphQL Starter

## Flow
- [x] code runs
- [ ] explain storage flow
- [ ] add header in request to choose storage (_mocks available especially for clients_)
- [ ] more thorough tests

## Docker

1. `yarn build`
2. `docker build .`
3. `docker tag __TAG__ aretecode/graphql-starter:v__VERSION__`
4. `docker push aretecode/graphql-starter:v__VERSION__`
5. `docker run -d -p 4444:4000 __TAG__`

