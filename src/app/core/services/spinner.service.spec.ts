import { TestBed, async } from '@angular/core/testing';
import { SpinnerService } from './spinner.service';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

describe('SpinnerService', () => {
  let spinnerServiceInstance: SpinnerService;

  beforeEach(async(() => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting()
    );
    TestBed.configureTestingModule({
      providers: [SpinnerService]
    }).compileComponents();

    spinnerServiceInstance = TestBed.get(SpinnerService);
  }));

  it('should instantiate the service', () => {
    expect(spinnerServiceInstance).toBeTruthy();
  });

  it('should display the spinner', () => {
    let expectedStatus: boolean;
    spinnerServiceInstance.status.subscribe(
      status => (expectedStatus = status)
    );
    spinnerServiceInstance.display(true);
    expect(expectedStatus).toBe(true);
  });
});
