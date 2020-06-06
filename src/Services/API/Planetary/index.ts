// #region Local Imports
import { Http } from "@Services";
// #endregion Local Imports

// #region Interface Imports
import { PlanetaryModel } from "@Interfaces";
// #endregion Interface Imports

export const HomeService = {
    GetSpecialCruises: async (
        payload: PlanetaryModel.GetApodPayload
    ): Promise<PlanetaryModel.GetSpecialCruiseResponse[]> => {
        let response: PlanetaryModel.GetSpecialCruiseResponse[];

        try {
            debugger;
            response = await Http.Request<PlanetaryModel.GetSpecialCruiseResponse[]>(
                "GET",
                "/customer/web/home-service/special-cruise",
                payload.params
            );
        } catch (error) {
            response = [];
        }

        return response;
    },
};
