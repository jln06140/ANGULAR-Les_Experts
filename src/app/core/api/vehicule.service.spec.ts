import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClientModule, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { HOST } from './vehicule.service';

// Http testing module and mocking controller
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Observable } from 'rxjs/Observable';
import { VehiculeService } from './vehicule.service';
import { Vehicule } from '../model';

fdescribe('VehiculeService : HttpClient testing', () => {
  let vehiculeService: VehiculeService;
  let http: HttpTestingController;
  let vehicules: Vehicule[];
  // fake response
  const mockData = [
    {id: 1, marque: 'Peugeot', model: '208', color: 'bleu', licensePlate: '23-EHD-49'},
    {id: 1, marque: 'Peugeot', model: '208', color: 'bleu', licensePlate: '23-EHD-49'}
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehiculeService],
      imports: [HttpClientModule, HttpClientTestingModule]
    });

    // Inject the http service and test controller for each test
    vehiculeService = TestBed.get(VehiculeService);
    http = TestBed.get(HttpTestingController);
  });

  afterEach( () => {
    http.verify();
  });

  it('HTTP : getAll mock data', () => {
    // call the service
    vehiculeService. getVehicules().subscribe(
      data => vehicules = data
    );
    // check that the underlying http request was correct
    const req = http.expectOne('http://localhost:8080/api/vehicule');
    expect(req.request.method).toBe('GET');
    // return the fake response  when we receive a request
    req.flush(mockData);

    // check that the returned array is deserialized as expected
    expect(vehicules.length).toBe(2);
    expect(vehicules[0].marque).toBe('Peugeot');
  });
});
