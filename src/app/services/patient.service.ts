import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FIND_ALL_REGION, API_URL, GET_ALL_PATIENT_URL, CREATE_PATIENT_URL, UPDATE_PATIENT_URL, DELETE_PATIENT_URL, FIND_ALL_SUB_GROUP , ADD_ONE_SUB_GROUP} from '../shared/constant';
import { Patient } from '../model/patient';
import { Observable } from 'rxjs';
import { SubGroup } from '../model/SubGroup';
import { Region } from '../model/region';


@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(`${API_URL}/${GET_ALL_PATIENT_URL}`);
  }

  getDataById(id: String): Observable<any> {
    return this.http.get<any>(`${API_URL}/${GET_ALL_PATIENT_URL}/${id}`);
  }

  getAllRegion(): Observable<any> {
    return this.http.get<any>(`${API_URL}/${FIND_ALL_REGION}`, { responseType: 'text' as 'json' });
  }
  getAllSubGroup(): Observable<any> {
    return this.http.get<any>(`${API_URL}/${FIND_ALL_SUB_GROUP}`, { responseType: 'text' as 'json' });
  }
  saveData(patient: Patient): Observable<any> {
    return this.http.post(`${API_URL}/${CREATE_PATIENT_URL}`, patient, { responseType: 'text' as 'json' });
  }
  saveSubGroup(subGroup: SubGroup, region: Region): Observable<any> {
    return this.http.post(`${API_URL}/${ADD_ONE_SUB_GROUP}/${subGroup.id}`, region.regionName);
  }
  updateData(id: String, patient: Patient): Observable<any> {
    return this.http.put(`${API_URL}/${UPDATE_PATIENT_URL}/${id}`, patient);
  }

  deleteData(id: string): Observable<any> {
    return this.http.delete(`${API_URL}/${DELETE_PATIENT_URL}/${id}`);
  }
}