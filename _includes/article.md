

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

### Windows

Pas 1
- Instalati VirtualBox, versiunea pentru Windows! Se poate descarca de aici: [adresa de descărcare](https://www.virtualbox.org/wiki/Downloads)

Pas 2
- Vagrant are nevoie de un client SSH, iar Windows 7/8 nu il contine by default, asa ca vom folosi Git.
- Instalati Git pentru Windows: [adresa de descărcare](http://msysgit.github.io/)
- Deschideti, in ordine, Control Panel -> System -> 'Advanced system settings' -> 'Environment Variables...', ca in imaginile ce urmeaza:

[![Imagine control panel](assets/images/images/windows/control_panel.png)](assets/images/images/windows/control_panel.png)
[![Imagine system](assets/images/images/windows/system.png)](assets/images/images/windows/system.png)
[![Imagine system properties](assets/images/images/windows/system_properties.png)](assets/images/images/windows/system_properties.png)

- In cele ce urmeaza, setati PATH-ul urmand pasii din imagini. Selectati 'Path' din 'System variables', apoi click 'Edit...':
[![Imagine path](assets/images/images/windows/path.png)](assets/images/images/windows/path.png)
- In variable value, adaugati la final calea catre folderul /bin unde ati instalat git. De obicei, aceasta este C:\Program Files (x86)\Git\bin
[![Imagine edit path](assets/images/images/windows/edit_path.png)](assets/images/images/windows/edit_path.png)

Pas 3
- Instalati Vagrant, versiunea de Windows: [adresa de descărcare a site-ului](http://www.vagrantup.com/downloads.html)
- Dupa instalare, windows-ul va cere un restart pentru a-si crea configurarile
- Dupa restart, puteti verifica in cmd daca s-a instalat, folosind comanda vagrant
[![Imagine vagrant cmd](assets/images/images/windows/vagrant_cmd.png)](assets/images/images/windows/vagrant_cmd.png)
