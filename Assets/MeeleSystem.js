#pragma strict


var theDammage : int = 50;
var distance : float;
var maxDistance : float = 1.5;


function Update() {
	if(Input.GetButtonDown("Fire1")) {
		GetComponent.<Animation>().Play();
		var hit : RaycastHit;
		if(Physics.Raycast(transform.position, transform.TransformDirection(Vector3.forward), hit)) {
			distance = hit.distance;
			if(distance < maxDistance) {
				hit.transform.SendMessage("ApplyDamage", theDammage, SendMessageOptions.DontRequireReceiver);
			}
		}
	}
} 