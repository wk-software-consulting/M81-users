[![Continuous Integration](https://github.com/codekoller/M81/actions/workflows/continuos-integration.yml/badge.svg)](https://github.com/codekoller/M81/actions/workflows/continuos-integration.yml)

# M81

#### Required

- `docker`, `docker-compose`, `git` and `git-flow`
  
### Git Flow recommended

- initial `git-flow`
  - `git flow init`

- initial new feature
  - `git flow feature start <branch>`

- finish new feature
  - `git flow feature finish <branch>`

- publish feature
  - `git flow feature publish <branch>`

- pull feature
  - `git flow feature pull <branch>`

- initial new release
  - `git flow release start <branch>`

- finish new release
  - `git flow release finish <branch>`

- initial new hotfix
  - `git flow hotfix start version <branch>`

- finish new hotfix
  - `git flow hotfix finish <branch>`

## Steps Database

1 - copy `cp -r .example.env .env`

2 - run `docker-compose up or make up`

3 - run config typeorm `yarn pretypeorm`

4 - run migrations `yarn typeorm:migration:run`