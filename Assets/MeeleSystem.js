#pragma strict


var theDammage : int = 50;
var distance : float;
var maxDistance : float = 2.5;
var Weapon : Transform;

function Update() {
	if(Input.GetButtonDown("Fire1")) {
		Weapon.GetComponent.<Animation>().Play("MeeleAttack");
		var hit : RaycastHit;
		if(Physics.Raycast(transform.position, transform.TransformDirection(Vector3.forward), hit)) {
			distance = hit.distance;
			if(distance < maxDistance) {
				hit.transform.SendMessage("ApplyDamage", theDammage, SendMessageOptions.DontRequireReceiver);
			}
		}
	}
} 