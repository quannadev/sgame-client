@echo off

rd /q /s .\iossmartfox\assets
rd /q /s .\iossmartfox\src

xcopy .\build\jsb-default\assets .\iossmartfox\assets /s /Y /I /D
xcopy .\build\jsb-default\src .\iossmartfox\src /s /Y /I /D

node version_generator.js -v 1.0.31 -u https://smartfox.vip/iossmartfox/ -s ./iossmartfox/ -d ./iossmartfox/

PAUSE