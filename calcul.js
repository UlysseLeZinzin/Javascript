        //EX 5
        //Créer 3 variables i,j,k et leur affecter 3 valeurs numériques diffs
        let i = 10;
        let j = 15;
        let k = 20;

        //Additionner les 3 variables et afficher le résultat
        let somme = i+j+k;
        console.log(somme);

        // Ex 6
        //Créer 3 variables x,y,z et leur affecter 3 valeurs numériques diffs
        let x = 2;
        let y = 4;
        let z = 6;

        //Afficher x + y * z
        let res1 = x + y * z;
        console.log(res1);

        //Afficher x * y + z
        let res2 = x * y + z;
        console.log(res2);

        //Afficher x - y * z
        let res3 = x - y * z;
        console.log(res3);

        //Afficher x / y + z
        let res4 = x / y + z;
        console.log(res4);

        //EX7
        //Déclarer  2 variables a et b et leur affecter des valeurs nums
        let a = 4;
        let b = 2;
        //Déterminer si la première variable est divisible par la deuxième
        //afficher le résultat en utilisant une condition if
        if (b!==0) {
            if (a%b === 0) {
                console.log("4 est divisible par 2");
            } else {
                console.log("4 n'est pas divisible par 2");
            }
        } else {
            console.log("La division n'est pas possible.");
        }