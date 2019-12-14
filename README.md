# Boilerplate for frontend projects

![](https://img.shields.io/badge/boilerplate-v1.0.0-blue.svg)

## CI/CD deployment urls

Available only in HSE local network (not in HSE public Wi-Fi: `hse.ru` and `HSE`).

* http://172.18.207.40:xxxx &mdash; dev build
* http://172.18.207.40:yyyy &mdash; dev storybook
* http://172.18.207.29:xxxx &mdash; prod build

## Development

* `npm run start` &mdash; start development server with code hot-reloading.
* `npm run storybook` &mdash; start storybook server with hot-reloading.
* `npm run test` &mdash; run all tests with hot-reloading.
* `npx prettier --check "src/**"` &mdash; check formatting (one time).
* `npx eslint "src/**"` &mdash; check linter errors (one time).
* Check console logs for React errors before commit.

## Docker

Run production server with nginx on `http://127.0.0.1:8080`
```
docker build -t ui_default .
docker run -it -p 8080:80 ui_default
```

Run storybook server with nginx on `http://127.0.0.1:6006`
```
docker build -t ui_default_storybook -f Dockerfile.storybook .
docker run -it -p 6006:80 ui_default_storybook
```

Run unit tests, check formatting, run linter:
```
docker build -t ui_default_tests -f Dockerfile.tests .
docker run -it ui_default_tests npx prettier --debug-check "src/**"
docker run -it ui_default_tests npx eslint --ext js,jsx "src/**"
docker run -it ui_default_tests npm run test -- --ci --reporters=default --reporters=jest-junit
```

## Docker swarm deployment details

See https://github.com/issekifora/devops_infrastructure/tree/master/dev_stage_stack_deploy for deployment configurations

* Port xxxx &mdash; primary build (registry name `ui_default_tests`)
* Port yyyy &mdash; storybook (registry name `ui_default_tests_storybook`)

IP-addresses:
* 172.18.207.40 &mdash; dev (registry tag `dev.latest`)
* 172.18.207.43 &mdash; stage (registry tag `stage.latest`)
* 172.18.207.29 &mdash; prod (registry tag `prod.latest`)
