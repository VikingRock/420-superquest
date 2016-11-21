import {ActionResult, GameScreen} from "../game";
import {Command, Verdict} from "../game-const";

const flower = new GameScreen(`Вы продохите немного вперед и снова видите над головой кирпичную кладку. Вы хотите проверить свои новые силы и со всего размаху бъетесь об нее головой. На этот раз кирпичи разлетаются во все стороны. Вы начинаете радостно прыгать и разносить головой все кирпичи, но случайно ударяетесь о еще одну металлическую штуку и видите как из нее вырастает цветок. Ваши действия?

1. Конечно же съесть его!`);

flower.commands
  .set(Command['1'], new ActionResult({
    'verdict': Verdict.WIN,
    'message': `Вы съедаете цветок и теперь понимаете, что можете крушить грибы не только прыгая на них сверху, но и бросая в них странные штуки, которые у вас лежат в карманах`
  }));

export default flower;
