import {Injectable} from "@angular/core";
import {AppConfig} from "./app-config";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppConfigService extends AppConfig{
  constructor(private http: HttpClient) {
    super();
  }

  loadConfig(): Promise<any> {
    return this.http.get<AppConfig>('app-config.json')
      .toPromise()
      .then(data => {
        this.defaultUrl = data!.defaultUrl;
        this.isRtlLayout = data!.isRtlLayout;
        this.layout = data!.layout;
        this.isCollapseMenu = data!.isCollapseMenu;
      })
      .catch(() => {
      });
  }
}
