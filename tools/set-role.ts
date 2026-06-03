import * as admin from 'firebase-admin';
import serviceAccount from '../service-account.json';



admin.initializeApp({
  credential: admin.credential.cert(
    serviceAccount as admin.ServiceAccount
  ),
});

async function setAdminRole() {

  // UID del usuario admin
  const uid = 'tekviTnpKPTVh0UJtYveOoFyAcm2';

  await admin.auth().setCustomUserClaims(uid, {
    role: 'admin',
  });

  console.log('Rol admin asignado');
}

setAdminRole();