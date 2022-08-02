@echo off

rd /q /s .\androidsmartfox\assets
rd /q /s .\androidsmartfox\src

xcopy .\build\jsb-default\assets .\androidsmartfox\assets /s /Y /I /D
xcopy .\build\jsb-default\src .\androidsmartfox\src /s /Y /I /D

node version_generator.js -v 1.0.31 -u https://smartfox.vip/androidsmartfox/ -s ./androidsmartfox/ -d ./androidsmartfox/

PAUSE