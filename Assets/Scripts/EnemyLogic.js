#pragma strict

var health : int = 100;

function Update(){
	if(health <= 0)
		Dead();
}

function ApplyDamage(theDamage : int) {
	health -= theDamage;
}

function Dead() {
	Destroy (gameObject) ;
}