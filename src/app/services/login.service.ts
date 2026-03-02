import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  http = inject(HttpClient);
  baseUrl = environment.baseUrl;

  generateOtp(employeeId: string) {
    return this.http.post<GenerateOtpResponse>(
      `${this.baseUrl}/employee-services/auth/generate-otp?pen=${employeeId}`,
      {},
    );
  }

  verifyOtp(id: string, otp: string, pen: string) {
    return this.http.post<VerifyOtpResponse>(`${this.baseUrl}/employee-services/auth/verify-otp`, {
      id,
      otp,
      pen,
    });
  }

  isAuthenticated() {
    const token = this.getToken();
    return !!token;
  }

  getToken() {
    return localStorage.getItem('token');
  }
}

// {
//     "payload": {
//         "token": "H4sIAAAAAAAA/12X25aiOBSGn2h64am7vSwRqNCVYI4oN7NK7S4xWO20NSXw9BMgIdu5+9bvzs4+JYafTXraJ4cyK1MkW1njMl1++dmkutiSazFdnI5J9bnXi9M+l53Rep+o5rV5+kRRet0n9zc6Xd6Mdj4mywaV97LIJ/d9slwUucp2+aRC598lm6QxUwQJGb3JIM5UdNrI4K18CdN7kS+yfYO+In2YZWK3wCW6oXfVFtv01/G5uhe8+00RGdWbXKq42+OQLNtjVOmDWZc3aI5FdcpE1BZ8cskSWr8I2pAz+sjWNNg1wYyclcYtqovLbrITb+WW38vjllQHXekuPnImFyziUyGePkh71IQHAbnQ2YvQi0wYP+KpzdZoWghToCQ+dTHstip4NTm/btm12OIye7+VTC6YkhXP1XLDdJHSQHF0vu6RXkgRobrPzTHvmHAWo/sDdzbVStKKrFSvs4ROcE1KwFAPPeOm4zSRMbY++73uGbc+lVrRBqxtxr24svsyueTUxiN0NPipVs90Qu+4AVwCBjbW5zOboJF7vQQ6WEu417MQ6KHXXV5Mzh/sh3oOOob7Ahvrx+ROsiEv6wf6B/qQC6NM/U/vY05TqfVDvhlkH39NAIO61aBuNfBTP6wF9qBWtu+KMBnYmsREuR7pOFWRHmOWk51la18CBvvicNBF5fMV8dPQI8cN4BAwsMfAHru5MvMP5q0d8koJlXZmnA7XwpoMTHxeSjI1zlvXU0ltv0QM4pd6yMvYqKjgDNgMfbEM15aAXW0D71NGD2ehGerGKFWuJgNjf6ZS1usn0c1P31/bIwL6NeYu9aNNCHSf1x2c2VgOdwJVFbY9GmLIYGxer0GcNYgzd356Hfi0PRp0Dvbyd84kAzoGe7n69PYwTj7eMzZ+2y/fU+7OKXXn0fRCagr3neIGcAmYAwb2BNiDu3Rqe0GopvcH3d8bXNr553Jna2sZ7PXAwMadkZ5LzxjoQ/wxEZ2N74tk3OtuJnubEDCwIcAPhmt9XjM3VxycZQ7OMndn0HEJ2Ndwlo3/ERTmYvtu2cbAQB/Hu9TYqPHMmjgjOsagxjPY/yeOPpU7p07ngIFPMCdzMA9zHPq9HnQ3nxM83i1MpoIBmwz4tD0S/f+sj/OBXW3NO2fMt2fu+cGmAbrPcTz7vc7To3kzbWRk7lXFNub8mPdP+kzlcYUF7d5Tpt+E4POuY3OuYoHbXg+ZiRevo46pimJFJbasNlIjwNFgrycpFpH1k0a4PVhdZXgtLceZ9Wl1DJhan6kQQa+bd9+S47V2ewmhpd+32gGmwA/0jyxXCV6/AdaA3b4qUzICugS8AwxtrH9zJ3r9RK1PE38tLFtdAt3lXlPvv+MDsI+APQI6AvYUsAQ2GKyNgA1c29tETBPTdxgDyFE8Ae712NRKepuu79amYnzUe8aA3czUoVBQH+dt5evZsZs9tele8WOcg95z5mcjlIH08Yy97lgDPrh+IdA75GPumALGgHeAZf9NQM3zWOplbt5+ZVbdShkzE0cddu99w7GI0hhVk6VZV+23q9t+VlWFZNVhWr3vL3Hwmi//7b4n6LSuDpdb57895qj7bnomrZ6ab4lOu+62tMzO0Yy0qDUVMN8v8oYuan4I0VcsDjN8NverMP/X2+BLOntOXkh4mhf0+rpdYWa+0L79+zukJ/ZXefoWhu/bP4f73z82zTy/Vejy4xosqo9q+Z3P5hucqd/sM+HnT/Tx8/uv5T8affwpP8nTf4WHy/r3DQAA",
//         "pen": "G79692",
//         "userId": "63f11ae0-77d5-46d7-9992-903826e510aa",
//         "name": "GREESHMA SANTHOSH",
//         "typeOfUser": "officials",
//         "designation": "Clerk",
//         "isAdministrator": false,
//         "adminPostIds": [],
//         "offices": [
//             {
//                 "name": "ചിറക്കല്‍ ഗ്രാമ പഞ്ചായത്ത്",
//                 "nameInEng": "Chirakkal Grama Panchayat",
//                 "primary": true,
//                 "unitRole": null,
//                 "interUnitRole": false,
//                 "lbTypeId": 5,
//                 "districtId": 503013,
//                 "privileges": [],
//                 "postInfo": [
//                     {
//                         "postNameInEng": "JC4",
//                         "primary": true,
//                         "designationId": 254,
//                         "postNameInLocal": "ജെ സി 4",
//                         "id": "819a913e-f8d1-4262-844c-765d321ff5a8"
//                     }
//                 ],
//                 "id": 10132101131
//             }
//         ],
//         "serviceDetails": [
//             {
//                 "serviceCode": "MMCM26",
//                 "roles": [
//                     "OPERATOR"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "DFCS16",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "DFCS15",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "DFCS14",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "DFCS13",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "PTAUAC",
//                 "roles": [
//                     "OPERATOR",
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "DFCS17",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "PGCT03",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "PGCT02",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "PGCT01",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "PGGR07",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "PGCT07",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "PGGR06",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "PGCT06",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "PGCT05",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "PGCT04",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "PGGR08",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "BFEN05",
//                 "roles": [
//                     "OPERATOR",
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "PGGR03",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "PGGR02",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "PGGR05",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "BFEN03",
//                 "roles": [
//                     "ENQUIRY_OFFICER",
//                     "OPERATOR"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "PTASNA",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "BFEN04",
//                 "roles": [
//                     "OPERATOR",
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "PGGR04",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "NTOR09",
//                 "roles": [
//                     "OPERATOR"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "PGGR01",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "BFEN01",
//                 "roles": [
//                     "OPERATOR",
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "TPER01",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "BFEN02",
//                 "roles": [
//                     "OPERATOR",
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "PGCT09",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "PGCT08",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "PGCT14",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "PGCT13",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "PGCT12",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "PGCT11",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "PGCT18",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "PGCT17",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "PGCT16",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "PGCT15",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "AITI01",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "PGCT10",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "BFLP06",
//                 "roles": [
//                     "ENQUIRY_OFFICER",
//                     "OPERATOR"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "BFLP07",
//                 "roles": [
//                     "ENQUIRY_OFFICER",
//                     "OPERATOR"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "BFLP04",
//                 "roles": [
//                     "ENQUIRY_OFFICER",
//                     "OPERATOR"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "BFLP05",
//                 "roles": [
//                     "OPERATOR",
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "BFLP02",
//                 "roles": [
//                     "ENQUIRY_OFFICER",
//                     "OPERATOR"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "DFCS37",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "BFLP03",
//                 "roles": [
//                     "ENQUIRY_OFFICER",
//                     "OPERATOR"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "DFCS36",
//                 "roles": [
//                     "OPERATOR",
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "RMAD01",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "BFLP01",
//                 "roles": [
//                     "ENQUIRY_OFFICER",
//                     "OPERATOR"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "PMTI01",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "PGCT19",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "BFMI10",
//                 "roles": [
//                     "ENQUIRY_OFFICER",
//                     "OPERATOR"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "ETET01",
//                 "roles": [
//                     "ENQUIRY_OFFICER",
//                     "OPERATOR"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "PGCT20",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "PTELBE",
//                 "roles": [
//                     "APPROVER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "DPAP04",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "DPAP03",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "PTBSID",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "HSEN08",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "AITI05",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "AITI06",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "BFMI08",
//                 "roles": [
//                     "OPERATOR",
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "BFMI09",
//                 "roles": [
//                     "OPERATOR",
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "AITI04",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "BFMI07",
//                 "roles": [
//                     "ENQUIRY_OFFICER",
//                     "OPERATOR"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "DPVS07",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "GAGA14",
//                 "roles": [
//                     "OPERATOR"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "DPVS01",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "DPVS04",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "DPVS03",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "DFCS59",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "FMAS34",
//                 "roles": [
//                     "OPERATOR"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "DPVS06",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "DPVS05",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "FMBD37",
//                 "roles": [
//                     "OPERATOR"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "PTASRA",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "PTBSOC",
//                 "roles": [
//                     "OPERATOR"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "DFCS63",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "AMRD04",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "DFCS62",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "DFCS61",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "DFCS60",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "DFCS67",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "DFCS66",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "DFCS65",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "DFCS64",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "AMBD06",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "BFIF08",
//                 "roles": [
//                     "ENQUIRY_OFFICER",
//                     "OPERATOR"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "PTASRS",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "DFCS69",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "BFIF09",
//                 "roles": [
//                     "OPERATOR",
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "DFCS68",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "BFIF04",
//                 "roles": [
//                     "OPERATOR"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "BFIF05",
//                 "roles": [
//                     "OPERATOR",
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "BFIF06",
//                 "roles": [
//                     "ENQUIRY_OFFICER",
//                     "OPERATOR"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "BFIF01",
//                 "roles": [
//                     "ENQUIRY_OFFICER",
//                     "OPERATOR"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "BFIF02",
//                 "roles": [
//                     "ENQUIRY_OFFICER",
//                     "OPERATOR"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "AMMF07",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "AMMF03",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "AMMF04",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "AMMF05",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "AMMF06",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "PTBSLB",
//                 "roles": [
//                     "APPROVER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "AMMF01",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "AMMF02",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "DFCS74",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "DFCS79",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "BFIF10",
//                 "roles": [
//                     "ENQUIRY_OFFICER",
//                     "OPERATOR"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "BFIF11",
//                 "roles": [
//                     "ENQUIRY_OFFICER",
//                     "OPERATOR"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "AMLD05",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "CRDR10",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "CRDR11",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "PTLBMS",
//                 "roles": [
//                     "OPERATOR"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "CRDR12",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "DFCS81",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "DFCS80",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "AMLD01",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "DFCS82",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "DFCS89",
//                 "roles": [
//                     "OPERATOR"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "PTEBSE",
//                 "roles": [
//                     "ENQUIRY_OFFICER",
//                     "OPERATOR"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "DPWS01",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "DFCS88",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "DFCS87",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "PSPS03",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "CRDR03",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "CRDR04",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "CRDR09",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "NTLB12",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "NTLB11",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "CRDR01",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "CRDR02",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "PTBSAU",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "BFPS01",
//                 "roles": [
//                     "OPERATOR",
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "NTLB09",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "PTBSRV",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "PTEORB",
//                 "roles": [
//                     "OPERATOR"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "PTEORA",
//                 "roles": [
//                     "OPERATOR",
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "CRNA01",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "PTEORV",
//                 "roles": [
//                     "OPERATOR"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "PTEORT",
//                 "roles": [
//                     "OPERATOR"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "RIRI01",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "AMVA01",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "EMEM03",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "EMEM02",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "BFSV01",
//                 "roles": [
//                     "OPERATOR",
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "EMEM01",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "NTLS04",
//                 "roles": [
//                     "OPERATOR"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "EMNR01",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "NTLS03",
//                 "roles": [
//                     "OPERATOR"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "NTLS02",
//                 "roles": [
//                     "OPERATOR"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "NTLS01",
//                 "roles": [
//                     "OPERATOR"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "PTCERC",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "TPLR01",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "PTASTA",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "PTTFRE",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "TPLR04",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "TPLR05",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "TPLR02",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "TPLR03",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "AMWB01",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "BFPA02",
//                 "roles": [
//                     "OPERATOR"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "BFPA01",
//                 "roles": [
//                     "ENQUIRY_OFFICER",
//                     "OPERATOR"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "PTBSER",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "DPAP08",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "DPAP07",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "DPAP14",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "DPAP13",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "DPAP12",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "PTBSVR",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "DPAP11",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "DPAP10",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "PTEOER",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "BFMI11",
//                 "roles": [
//                     "OPERATOR",
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "BFAN01",
//                 "roles": [
//                     "OPERATOR",
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "PTESNE",
//                 "roles": [
//                     "OPERATOR"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "PTENUA",
//                 "roles": [
//                     "OPERATOR"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "PTBSTE",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "BFHP04",
//                 "roles": [
//                     "OPERATOR",
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "BFHP05",
//                 "roles": [
//                     "OPERATOR",
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "BFHP01",
//                 "roles": [
//                     "ENQUIRY_OFFICER",
//                     "OPERATOR"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "BFHP02",
//                 "roles": [
//                     "ENQUIRY_OFFICER",
//                     "OPERATOR"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "BFHP03",
//                 "roles": [
//                     "OPERATOR",
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "CRND01",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "AMEN01",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "AMEN02",
//                 "roles": [
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "BFTR01",
//                 "roles": [
//                     "OPERATOR",
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "BFTR03",
//                 "roles": [
//                     "OPERATOR",
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "BFTR02",
//                 "roles": [
//                     "ENQUIRY_OFFICER",
//                     "OPERATOR"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "BFTR04",
//                 "roles": [
//                     "ENQUIRY_OFFICER",
//                     "OPERATOR"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "PTEOTR",
//                 "roles": [
//                     "OPERATOR"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "DFCS01",
//                 "roles": [
//                     "OPERATOR"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "BFSH02",
//                 "roles": [
//                     "OPERATOR",
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "BFSH01",
//                 "roles": [
//                     "ENQUIRY_OFFICER",
//                     "OPERATOR"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "BFSH04",
//                 "roles": [
//                     "OPERATOR",
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "BFSH03",
//                 "roles": [
//                     "OPERATOR",
//                     "ENQUIRY_OFFICER"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "BFSH06",
//                 "roles": [
//                     "ENQUIRY_OFFICER",
//                     "OPERATOR"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             },
//             {
//                 "serviceCode": "BFSH05",
//                 "roles": [
//                     "ENQUIRY_OFFICER",
//                     "OPERATOR"
//                 ],
//                 "officeId": 10132101131,
//                 "postId": "819a913e-f8d1-4262-844c-765d321ff5a8"
//             }
//         ],
//         "directorOfficeMappings": null
//     },
//     "message": "Successfully authenticated"
// }
