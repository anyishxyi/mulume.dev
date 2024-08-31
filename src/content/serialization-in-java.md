---
title: Sérialisation en Java - Objets Sérialisables et Non Sérialisables
titleSize: 45
slug: serialization-in-java-2024-08-12
date: 08/12/2024
coverImage: /img/serialization.jpg
coverCredit: 'Photo by <a href="https://pixabay.com/fr/users/skitterphoto-324082/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=384596">Rudy and Peter Skitterians</a> de <a href="https://pixabay.com/fr//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=384596">Pixabay</a>'
---

La sérialisation est un concept fondamental en Java qui permet de convertir un objet en un flux de bytes afin qu’il puisse être stocké sur disque, transmis à travers un réseau, ou encore sauvegardé pour être restauré ultérieurement. Pour qu’un objet Java soit sérialisable, sa classe doit implémenter une interface spécifique. Cet article explore les mécanismes de sérialisation en Java, les classes qui peuvent être sérialisées, ainsi que les situations où la sérialisation n’est pas possible.

### 1. Qu’est-ce que la Sérialisation ?

La sérialisation en Java est le processus de conversion d’un objet en un flux de bytes. Ce flux de bytes peut ensuite être utilisé pour recréer une copie exacte de l’objet, grâce à un processus inverse appelé désérialisation. La sérialisation est souvent utilisée pour stocker l’état d’un objet dans un fichier, pour envoyer des objets sur un réseau, ou encore pour sauvegarder l’état d’une session dans une application web.

### 2. Interface Serializable

Pour qu’une classe soit sérialisable, elle doit implémenter l’interface Serializable qui se trouve dans le package java.io. Cette interface est un marqueur (ou “tagging interface”), ce qui signifie qu’elle n’a pas de méthodes à implémenter ; elle sert simplement à indiquer au compilateur et au runtime que les instances de cette classe peuvent être sérialisées.

**Exemple :**

```java
import java.io.Serializable;

public class Person implements Serializable {
    private String name;
    private int age;

    // Constructeurs, getters, setters, etc.
}
```

Dans cet exemple, la classe Person est sérialisable car elle implémente Serializable. Cela signifie que les objets de la classe Person peuvent être convertis en un flux de bytes et restaurés ultérieurement.

### 3. Objets Non Sérialisables

En Java, toutes les classes ne sont pas sérialisables par défaut. Si une classe n’implémente pas l’interface Serializable, ses objets ne pourront pas être sérialisés. Par exemple :

```java
public class Employee {
    private String name;
    private double salary;

    // Constructeurs, getters, setters, etc.
}
```

La classe Employee dans cet exemple n’est pas sérialisable, car elle n’implémente pas l’interface Serializable. Si vous essayez de sérialiser un objet de cette classe, le programme jettera une exception NotSerializableException.

### 4. Champs Transitoires (transient)

Même dans une classe sérialisable, il peut y avoir des champs que vous ne souhaitez pas sérialiser. Java fournit le mot-clé transient pour indiquer que ces champs ne doivent pas être inclus dans le processus de sérialisation.

```java
import java.io.Serializable;

public class BankAccount implements Serializable {
    private String accountNumber;
    private transient double balance;

    // Constructeurs, getters, setters, etc.
}
```

Dans la classe BankAccount, le champ balance est marqué comme transient, ce qui signifie qu’il ne sera pas sérialisé. Si vous sérialisez un objet BankAccount, l’état de balance ne sera pas conservé.

### 5. Sérialisation et Héritage

Lorsque vous travaillez avec l’héritage, la sérialisation devient légèrement plus complexe. Si une classe sérialisable hérite d’une classe non sérialisable, les champs de la classe parente ne seront pas sérialisés. Pour illustrer cela :

**Exemple :**

```java
import java.io.Serializable;

public class SuperClass {
    protected String superClassField;
    public SuperClass(String superClassField) {
        this.superClassField = superClassField;
    }
}

public class SubClass extends SuperClass implements Serializable {
    private String subClassField;

    public SubClass(String superClassField, String subClassField) {
        super(superClassField);
        this.subClassField = subClassField;
    }
}
```

Dans cet exemple, SubClass est sérialisable, mais SuperClass ne l’est pas. Si vous sérialisez un objet de SubClass, seul subClassField sera sérialisé. Le champ superClassField ne le sera pas, car SuperClass ne met pas en œuvre Serializable.

### 6. Classes Internes et Anonymes

Les classes internes, y compris les classes locales et anonymes, posent un défi particulier pour la sérialisation. Ces classes ne sont généralement pas sérialisables par défaut, même si elles implémentent Serializable. Cela est dû à leur lien étroit avec l’instance de la classe englobante, rendant leur sérialisation plus complexe.

### 6.1. Classes Internes Non Statiques

Une classe interne non statique est liée à une instance spécifique de la classe englobante. Cela signifie qu’elle a implicitement accès aux membres de l’instance de la classe englobante, ce qui rend sa sérialisation difficile.

**Exemple :**

```java
import java.io.Serializable;

public class OuterClass {
    private String outerField = "Outer Field";

    public class InnerClass implements Serializable {
        private String innerField = "Inner Field";

        public String getCombinedFields() {
            return outerField + " " + innerField;
        }
    }
}
```

Ici, InnerClass est une classe interne non statique. Bien qu’elle implémente Serializable, la sérialisation de cette classe peut entraîner des problèmes, car elle dépend de l’instance de OuterClass. Lors de la désérialisation, il peut être difficile de restaurer correctement la référence à l’instance de OuterClass.

### 6.2. Classes Anonymes

Les classes anonymes posent un défi encore plus grand. Ces classes sont souvent utilisées pour implémenter des interfaces ou des classes abstraites sur le vif, et leur sérialisation est presque toujours déconseillée.

**Exemple :**

```java
import java.io.Serializable;

public class OuterClass {
    public void createAnonymousClass() {
        Serializable anonymousClass = new Serializable() {
            private String field = "Anonymous Field";

            public String getField() {
                return field;
            }
        };
    }
}
```

Dans cet exemple, nous créons une classe anonyme qui implémente Serializable. Cependant, la sérialisation de cette classe est impossible, car elle n’a pas de nom et est étroitement couplée avec l’instance de OuterClass. En outre, les classes anonymes ne peuvent pas être facilement recréées lors de la désérialisation.

### 6.3. Classes Internes Statiques

Contrairement aux classes internes non statiques, les classes internes statiques (ou classes imbriquées statiques) n’ont pas de lien implicite avec une instance de la classe englobante. Par conséquent, elles peuvent être sérialisées plus facilement.

**Exemple :**

```java
import java.io.Serializable;

public class OuterClass {
    private static String outerField = "Outer Field";

    public static class StaticNestedClass implements Serializable {
        private String nestedField = "Nested Field";

        public String getCombinedFields() {
            return outerField + " " + nestedField;
        }
    }
}
```

Dans cet exemple, StaticNestedClass est une classe imbriquée statique et sérialisable. Contrairement à une classe interne non statique, elle n’a pas besoin d’une instance de OuterClass pour fonctionner. Par conséquent, sa sérialisation et désérialisation sont simples et directes.

### 7. L’importance de serialVersionUID dans les Classes Sérialisables

Lorsque vous créez une classe sérialisable en Java, il est courant de voir une recommandation pour ajouter un champ serialVersionUID. Ce champ est un identifiant unique pour chaque version de la classe, utilisé lors de la désérialisation pour s’assurer que la classe qui a été désérialisée correspond exactement à la classe qui a été initialement sérialisée.

### 7.1. Pourquoi Utiliser serialVersionUID ?

Le champ serialVersionUID est important pour plusieurs raisons :

- Compatibilité des Versions : Lorsqu’une classe sérialisable évolue, des modifications telles que l’ajout de nouveaux champs ou la modification de la hiérarchie de classe peuvent rendre les versions plus anciennes incompatibles avec les nouvelles versions. Si vous ne définissez pas explicitement un serialVersionUID, le runtime de Java génère automatiquement un identifiant basé sur divers aspects de la classe (noms des champs, méthodes, etc.). Toutefois, cela peut provoquer des erreurs de désérialisation si la classe a été modifiée.
- ontrôle de la Version : En définissant explicitement un serialVersionUID, vous avez un contrôle total sur la compatibilité entre différentes versions de la classe. Si vous ne modifiez pas cet identifiant lors de l’évolution de la classe, vous garantissez que les instances sérialisées avec l’ancienne version peuvent toujours être désérialisées avec la nouvelle version.

**Exemple :**

```java
import java.io.Serializable;

public class Person implements Serializable {
    private static final long serialVersionUID = 1L;
    private String name;
    private int age;

    // Constructeurs, getters, setters, etc.
}
```

Dans cet exemple, la classe Person a un serialVersionUID défini explicitement. Cela signifie que tant que vous ne modifiez pas cet identifiant lors de l’évolution de la classe, les objets sérialisés avec cette classe peuvent être désérialisés en toute sécurité, même si vous ajoutez de nouveaux champs ou modifiez légèrement la classe.

### 7.2. Cas où serialVersionUID Peut Causer des Problèmes

Le serialVersionUID peut devenir une source de problèmes de compatibilité dans les cas suivants :

- Modification du serialVersionUID : Si vous modifiez manuellement le serialVersionUID après avoir sérialisé des objets avec l’ancien identifiant, ces objets ne pourront plus être désérialisés correctement. Le runtime Java générera une InvalidClassException, indiquant que les versions de la classe ne correspondent pas.

**Exemple :**

Supposons que vous ayez la classe Person avec un serialVersionUID initial de 1L. Si vous modifiez ce serialVersionUID en 2L sans changer la structure de la classe, les anciennes instances sérialisées avec 1L ne pourront plus être désérialisées.

```java
import java.io.Serializable;

public class Person implements Serializable {
    private static final long serialVersionUID = 2L; // Changement manuel
    private String name;
    private int age;

    // Constructeurs, getters, setters, etc.
}
```

Cela entraînera une incompatibilité, même si la structure de la classe n’a pas changé.

- Ajout de nouveaux champs sans mise à jour du serialVersionUID : Si vous ajoutez de nouveaux champs à une classe sérialisable sans modifier le serialVersionUID (ou si vous laissez Java générer automatiquement cet ID), il est possible que des erreurs de désérialisation surviennent. Le runtime Java peut ne pas savoir comment gérer les nouveaux champs ou les ignorer complètement, ce qui pourrait entraîner une perte de données ou un comportement inattendu.

**Exemple :**

```java
import java.io.Serializable;

public class Person implements Serializable {
    private static final long serialVersionUID = 1L;
    private String name;
    private int age;
    private String address; // Nouveau champ ajouté

    // Constructeurs, getters, setters, etc.
}
```

Dans cet exemple, si un objet Person sérialisé avant l’ajout du champ address est désérialisé avec cette nouvelle version de la classe, le champ address sera initialisé à null, car il n’existait pas lors de la sérialisation originale. Si serialVersionUID avait été modifié, cela aurait permis d’indiquer explicitement qu’il y a eu une rupture de compatibilité, et une exception serait lancée pour signaler ce problème.

### 8. Conclusion

La sérialisation est une fonctionnalité puissante en Java qui permet de conserver l’état des objets. Cependant, toutes les classes ne sont pas sérialisables par défaut, et certaines classes, comme les classes internes et anonymes, peuvent poser des défis uniques en matière de sérialisation. De plus, l’utilisation du serialVersionUID est essentielle pour assurer la compatibilité entre différentes versions de classes sérialisables.

Néanmoins, il est crucial de manipuler le serialVersionUID avec soin. Modifier cet identifiant ou ne pas le définir explicitement peut entraîner des problèmes de compatibilité lors de la désérialisation, notamment des erreurs comme InvalidClassException. Pour garantir une compatibilité à long terme, il est recommandé de définir explicitement le serialVersionUID dans toutes les classes sérialisables et de le mettre à jour de manière cohérente lorsque des changements importants sont apportés à la classe. En comprenant ces concepts et en suivant ces meilleures pratiques, vous pouvez tirer parti de la sérialisation en Java tout en minimisant les risques d’erreurs et de pertes de données.
