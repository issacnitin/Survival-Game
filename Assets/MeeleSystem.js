#pragma strict


var theDammage : int = 50;
var distance : float;

function Update() {

	if(Input.GetButtonDown("Fire1")) {
		var hit : RaycastHit;
		if(Physics.Raycast(transform.position, transform.TransformDirection(Vector3.forward), hit)) {

			distance = hit.distance;
			hit.transform.SendMessage("Apply Damage", theDammage, SendMessageOptions.DontRequireReceiver);
		}
	}
} 