// #region Interface Imports
import { ApodPayload, ApodResponse, SpecialCruiseResponse } from "@Interfaces";
// #endregion Interface Imports

declare namespace PlanetaryModel {
    export interface GetApodPayload {
        params: ApodPayload;
    }

    export interface GetSpecialCruiseResponse extends SpecialCruiseResponse {}
}

export { PlanetaryModel };
