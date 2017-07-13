# LIGHTS CONTROLLER
SADFASDFASDFAS


# DISSENY
FALTEN CAPTURES DE PANTALLA DE LES IMATGES CREADES

# ESTRUCTURA
Hem dividit l'aplicació en tres parts: la configuració de les sortides, la programació (drag and drop) del control de llums i el propi control.

## Configuració

```javascript
  {"type": ["light bulb","led","speaker","fan"]
  "config":{
      13: { },
      14: { },
  }
```

## Classes
### OutputDevice
Permetrà configurar tots els elements connectats a la taula de llums. Tindrà els següents atributs:
    - typeTags      : string    --> tipus de dispositiu
    - outputPin     : string    --> output on està connectat el dispositiu en el servidor
    - name          : string    --> descripció breu (màxim 16 caràcters) del dispositiu
    - description   : string    --> descripció de les característiques del dispositiu.

## Components

### [conf-outputs] - Configuració de totes les sortides.
- Permetrà configurar totes les sortides del dispositiu a partir del ser fitxer de configuració. Haurà de poder crear, editar i eliminar els dispositius assignats a una sortida del servidor.
- Farà ús de la classe OutputDevice.
- Farà ús del servei DataConfig per tal d'obtenir el fitxer de configuració.
- Tindrà els següents atributs:
    - currentEl     : OutputDevice    --> Dispositiu seleccionat que es passarà com a @Output al component [conf-output]
    - devices       : OutputDevice [] --> per desar totes les sortides.

### [conf-output] - Configuració d'una sortida.
- Permetrà configurar una sortida de tipus [Element]. El component tindrà:
    - @Input <el> de tipus element.
    
    
<h1>Web del projecte</h1>

<h2><a href="http://35.197.198.182/">http://35.197.198.182/</a></font></h2>
    
