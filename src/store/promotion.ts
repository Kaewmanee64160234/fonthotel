import { Promotion } from "@/model/promotion.model";
import { defineStore } from "pinia";
import { ref } from "vue";
import promotionService from "@/service/promotion";
export const usePromotionsStore = defineStore("promotion", () => {
  const promotions = ref<Promotion[]>([
    {
      createdDate: new Date(),
      discount: 0,
      discountPercent: 0,

      endDate: new Date(),
      id: 0,
      name: "",
    },
  ]);

  const getPromotions = async () => {
    const response = await promotionService.getPromotion();
    if (response.data != null) {
      const promotionlist = response.data.map((promotion: any) => {
        const promotion_: Promotion ={
          createdDate: new Date(promotion.prom_created_date),
          discount: promotion.prom_discount,
          discountPercent: promotion.prom_discount_pres,
          endDate: new Date(promotion.prom_end_date),
          id: promotion.prom_id,
          name: promotion.prom_name,

        };
        return promotion_;
      });
      promotions.value = [];
      promotions.value.push(...promotionlist);
      console.log(promotions.value);

    }
  };

  //find promotion by code
  const findPromotion = async (code: string) => {
    const promotion = promotions.value.find(
      (promotion) => promotion.name === code
    );
    return promotion;
  };

  return { promotions, findPromotion, getPromotions };
});
