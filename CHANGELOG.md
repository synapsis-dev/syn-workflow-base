## [1.4.7](https://github.com/dkanehl/syn-workflow-base/compare/v1.4.6...v1.4.7) (2021-06-15)


### Features

* add type support for `open` and `show` for `uploadFormObj` type ([784baa5](https://github.com/dkanehl/syn-workflow-base/commit/784baa566a442c7dbb9954702ee9577b4ada0174))
* add typing support for the `uploadFormObj` ([f8360cb](https://github.com/dkanehl/syn-workflow-base/commit/f8360cbec5c619ef702100bf9c67cf2b0ba34bc4))


### Reverts

* Revert "Merge branch 'hotfix/v1.4.6'" ([6c04f27](https://github.com/dkanehl/syn-workflow-base/commit/6c04f278fd0ffa56d9d40d6e1258f6f54cb123d7))



## [1.4.6](https://github.com/dkanehl/syn-workflow-base/compare/v1.4.5...v1.4.6) (2021-06-15)


### Features

* add quick support for `showFile` ([07cf032](https://github.com/dkanehl/syn-workflow-base/commit/07cf032bb0cbb92d88484db5de0fa0ce7802a31a))



## [1.4.5](https://github.com/dkanehl/syn-workflow-base/compare/v1.4.4...v1.4.5) (2021-06-15)


### Features

* add basic support for `$JR_UPLOAD_MANAGERS.get('id').buildUrl()` ([8cd8f77](https://github.com/dkanehl/syn-workflow-base/commit/8cd8f77e9dc7ca1d4553b4be3b54529e6ccac715))



## [1.4.4](https://github.com/dkanehl/syn-workflow-base/compare/v1.4.3...v1.4.4) (2021-03-07)


### Bug Fixes

* fix radio elements so they don't have the visible propertie ([6f0cd78](https://github.com/dkanehl/syn-workflow-base/commit/6f0cd7870e609321fa61a221416faf31da1b6352))



## [1.4.3](https://github.com/dkanehl/syn-workflow-base/compare/v1.4.2...v1.4.3) (2021-03-07)


### Bug Fixes

* make subtable logic `Name` property public ([6d9858d](https://github.com/dkanehl/syn-workflow-base/commit/6d9858df2aa263140e66bc5136d7341791b8b723))



## [1.4.2](https://github.com/dkanehl/syn-workflow-base/compare/v1.4.0...v1.4.2) (2021-03-07)


### Bug Fixes

* simple value elements will now have a visible propertie exept for radio elements and sort some imports ([eb9ea24](https://github.com/dkanehl/syn-workflow-base/commit/eb9ea24cf8e7ee81e02b6d8614a0ccacc7537c2b))


### Features

* add missing id and value property for radio values ([a49ec60](https://github.com/dkanehl/syn-workflow-base/commit/a49ec600e1267f311a89e1786262094de88eb8a1))
* add typedoc comments and change some spacing ([9a2f76c](https://github.com/dkanehl/syn-workflow-base/commit/9a2f76c93edb621ab683de16310a38fc192dfc52))



## [1.4.1](https://github.com/dkanehl/syn-workflow-base/compare/v1.4.0...v1.4.1) (2021-03-06)


### Features

* add missing id and value property for radio values ([a49ec60](https://github.com/dkanehl/syn-workflow-base/commit/a49ec600e1267f311a89e1786262094de88eb8a1))



# [1.4.0](https://github.com/dkanehl/syn-workflow-base/compare/v1.3.1...v1.4.0) (2021-03-06)


### Features

* implement `caseIt` library ([465abaa](https://github.com/dkanehl/syn-workflow-base/commit/465abaadebc912d7d9f68a62f24e2ed4b2951850))
* implement a second batch new element definitions ([945f69a](https://github.com/dkanehl/syn-workflow-base/commit/945f69a1a87e3c4d40e5a62f4c9a8b4f3913c2aa))
* implement the first batch of new definitions ([25bf6cd](https://github.com/dkanehl/syn-workflow-base/commit/25bf6cd606f3b04ac326012848b639cbcdd1372b))
* update generator function to generate the new definition types ([37e5d33](https://github.com/dkanehl/syn-workflow-base/commit/37e5d330a88468dd29dc24638217befceab084f3))



# [1.3.1](https://github.com/dkanehl/syn-workflow-base/compare/v1.3.0...v1.3.1) (2021-03-04)


### Bug Fixes

* fix `$JRSTEP is not defined` error when `GetProcessDataUrl` is called in designer ([6bf73cd](https://github.com/dkanehl/syn-workflow-base/commit/6bf73cd63674aeb77a21a99828a9082e02e5dd4f))



# [1.3.0](https://github.com/dkanehl/syn-workflow-base/compare/v1.2.0...v1.3.0) (2021-03-02)


### Bug Fixes

* fix property name of registry component ([42d6951](https://github.com/dkanehl/syn-workflow-base/commit/42d6951324282a52c54c225e623e75f8d74b1b9c))


### Features

* implement definition generator functions ([e2e175c](https://github.com/dkanehl/syn-workflow-base/commit/e2e175c6b0b9717d4723d3ffc6c8e77202361c64))



# [1.2.0](https://github.com/dkanehl/syn-workflow-base/compare/v1.1.6...v1.2.0) (2021-02-11)

### Features

* add ability to set a default or custom style to some default elements ([6d376e4](https://github.com/dkanehl/syn-workflow-base/commit/6d376e4eac90e10bedd7d85076ed7b9ea3af4ca0))


### BREAKING CHANGES

* The previous usage of `SetDefaultStyle` function will break do to parameter changes.



# [1.1.1](https://github.com/dkanehl/syn-workflow-base/compare/v1.1.0...v1.1.1) (2020-10-30)


### Bug Fixes

* fix issue where columns would be ignored due to wrong dom check ([de65d6a](https://github.com/dkanehl/syn-workflow-base/commit/de65d6a5d7012e160a8701f01ef6be30048a1893))




# [1.1.0](https://github.com/dkanehl/syn-workflow-base/compare/v1.0.0...v1.1.0) (2020-10-30)


### Features

* implement an column state manager ([5161926](https://github.com/dkanehl/syn-workflow-base/commit/5161926a1983c311facfcceff6557d91d2bfbff3))



# 1.0.0 (2020-09-24)


### Features

* expose fields state arrays ([7bb8541](https://github.com/dkanehl/syn-workflow-base/commit/7bb8541d9477e862761d472da7f81e75d5dffe4d))
* implement temporary unset for required fields ([15cea29](https://github.com/dkanehl/syn-workflow-base/commit/15cea297fcce35c5ff8ad5f457ecad2bd5b3309d))




