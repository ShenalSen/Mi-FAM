import * as dmUtils from "./dm-utils";
declare var DM_PROPERTIES: any;

/*
 * title : "root",
 * inputType : "JSON",
 */
interface Root {
    name: string;
    dob: string;
    ssn: string;
    address: string;
    phone: string;
    email: string;
    doctor: string;
    hospital_id: string;
    hospital: string;
    cardNo: string;
    appointment_date: string;
}

/*
* title : "root",
* outputType : "JSON",
*/
interface OutputRoot {
    patient: {
        name: string
        dob: string
        ssn: string
        address: string
        phone: string
        email: string
    }
    doctor: string
    hospital_id: string
    hospital: string
    appointment_date: string
}



/**
 * functionName : map_S_root_S_root
 * inputVariable : inputroot
*/
export function mapFunction(input: Root): OutputRoot {
    return {
        patient: {
            name: input.name,
            dob: input.dob,
            ssn: input.ssn,
            address: input.address,
            phone: input.phone,
            email: input.email
        },
        doctor: input.doctor,
        hospital_id: input.hospital_id,
        hospital: input.hospital,
        appointment_date: input.appointment_date
    }
}

