

## Instalare

### Ubuntu

### Mac OS X

Primul pas spre a instala Vagrant pe o mașină OS X este a descărca imaginea de instalare _.dmg_ (ultima versiune disponibilă la data creări articolului este **vagrant_v1.7.3.dmg**). Aceasta imagine este disponibilă la [adresa de descărcare a site-ului](http://www.vagrantup.com/downloads.html) Vagrant, ilustrată in imaginea de mai jos:
[![Imagine pagină de descărcare](assets/images/images/macos/download.png)](assets/images/images/macos/download.png)

După ce imaginea este descărcată, dacă nu se montează automat, faceți `dublu-click` pe fișier pentru a îl monta. După ce imaginea este montată, se va deschide o fereastră _Finder_ cu conținutul, ce va arătă asemănător cu imaginea de mai jos:
[![Imagine conținut imagine](assets/images/images/macos/image.png)](assets/images/images/macos/image.png)

În acest moment, va trebui executat fișierul `Vagrant.pkg` pentru a iniția instalarea. Instalarea urmează un fir standard de execuție, necesitând apăsarea butonului de continuare de două ori, oferind opțiunea de a schimba locația instalării. La sfârșitul acestui proces, utilizatorul va fi solicitat să introducă parola sa pentru a putea efectua instalarea. Procesul este ilustrat în imaginile de mai jos:

[![Imagine prim pas al instalării](assets/images/images/macos/firststep.png)](assets/images/images/macos/firststep.png)
[![Imagine alegere a locației instalării](assets/images/images/macos/installlocation.png)](assets/images/images/macos/installlocation.png)
[![Imagine solicitare a parolei](assets/images/images/macos/pass.png)](assets/images/images/macos/pass.png)

Instalarea va continua până la sfârșit, prezentând următoarea fereastră:

[![Imagine terminare instalare](assets/images/images/macos/installcomplete.png)](assets/images/images/macos/installcomplete.png)

În acest moment este recomandată demontarea imaginii, din moment ce instalarea este finalizată. Demontarea se realizează prin apăsarea butonului indicat în imaginea de mai jos.

[![Imagine demontare imagine](assets/images/images/macos/unmount.png)](assets/images/images/macos/unmount.png)

Din acest moment, utilizarea programului command line `vagrant` va fi posibil folosind aplicația `Terminal.app` (sau `iTerm2.app` sau orice alt emulator terminal preferat). Exemplu de funcționalitate este prezentat mai jos:

[![Imagine execuție vagrant help](assets/images/images/macos/vagranthelp.png)](assets/images/images/macos/vagranthelp.png)
