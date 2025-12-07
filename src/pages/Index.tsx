import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchText, setSearchText] = useState('');

  const sections = [
    {
      id: 'om',
      title: 'Общая методика',
      subsections: [
        {
          id: '1',
          title: 'Курс математики в средней школе и методика преподавания',
          items: [
            'Составные части методики преподавания математики',
            'Цели обучения математике',
            'Взаимосвязь целей, содержания, форм и методов обучения математике',
            'Движение за реформу математического образования',
            'Предмет математики, роль математики, роль практики в возникновении и развитии математики',
            'Математическая деятельность, её составные части',
            'Практические приложения математики',
            'Связь математики с другими учебными дисциплинами',
          ],
        },
        {
          id: '2',
          title: 'Анализ программ по математике для 1-11 классов',
          items: [
            'Содержание школьного курса математики',
            'Перспективы развития школьного курса математики',
          ],
        },
        {
          id: '3',
          title: 'Принципы дидактики в преподавании математики',
          items: [
            'Реализация дидактических принципов в обучении математике',
            'Принципы обучения как категории дидактики',
            'Принцип воспитания',
            'Принцип направленности обучения',
            'Принцип научности',
            'Принцип усиления прикладной направленности обучения',
            'Принцип систематичности и последовательности',
            'Принцип доступности',
            'Принцип сознательности, активности, самостоятельности',
            'Принцип наглядности',
            'Принцип индивидуального подхода к учащимся',
            'Принцип прочности знаний',
          ],
        },
        {
          id: '4',
          title: 'Методы обучения математике',
          items: [
            'Словесные методы обучения',
            'Наглядные методы обучения',
            'Практические методы обучения',
            'Методы обучения по уровню познавательной деятельности',
            'Проблемное обучение математике',
            'Эвристический метод обучения математике',
            'Метод программированного обучения',
            'Методы информатики в обучении математике',
            'Методы научного познания в обучении математике',
          ],
        },
        {
          id: '5',
          title: 'Применение индукции и дедукции в преподавании математики',
          items: [
            'Индукция',
            'Математическая индукция',
            'Дедукция',
          ],
        },
        {
          id: '6',
          title: 'Методика введения математических понятий',
          items: [
            'Математические понятия',
            'Математические понятия, предложения и доказательства',
            'Математические суждения и умозаключения',
            'Основные виды математического суждения',
          ],
        },
        {
          id: '7',
          title: 'Теоремы в школьном курсе математики',
          items: [
            'Математические предложения',
          ],
        },
        {
          id: '8',
          title: 'Методика обучения решению задач',
          items: [
            'Роль задач в обучении математике',
            'Значение учебных математических задач',
            'Роль задач в процессе обучения математике',
            'Обучение математике через задачи',
            'Общие методы обучения решению математических задач',
            'Организация обучения решению математических задач',
          ],
        },
        {
          id: '9',
          title: 'Урок математики',
          items: [
            'Организация обучения математике',
            'Урок, его структура. Основные требования к уроку',
            'Типы уроков',
          ],
        },
        {
          id: '10',
          title: 'Средства обучения математике',
          items: [
            'Наглядные пособия и технические средства информации',
            'Технические средства обратной связи в обучении математике',
            'Кабинет математики',
          ],
        },
        {
          id: '11',
          title: 'Проверка и оценка знаний учащихся',
          items: [],
        },
        {
          id: '12',
          title: 'Организация обучения в вечерних и заочных школах',
          items: [],
        },
        {
          id: '13',
          title: 'Повышенная математическая подготовка учащихся',
          items: [],
        },
        {
          id: '14',
          title: 'Внеклассная работа с учащимися по математике',
          items: [
            'Внеклассная работа учащихся по математике',
            'Кружковые занятия по математике',
            'Работа учащихся с дополнительной литературой',
            'Факультативные занятия по математике',
          ],
        },
      ],
    },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchText.length >= 4) {
      console.log('Поиск:', searchText);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <div className="container max-w-5xl mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-sm md:text-base text-muted-foreground uppercase tracking-wide mb-3">
            Информационно-справочная система
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-2">
            Электронная хрестоматия
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground font-semibold">
            по методике преподавания математики
          </h2>
        </div>

        <Card className="mb-8 shadow-lg animate-scale-in">
          <CardContent className="pt-6">
            <form onSubmit={handleSearch} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Введите строку для поиска по хрестоматии:
                </label>
                <div className="flex gap-2">
                  <Input
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Поиск материалов..."
                    className="flex-1 text-base"
                    size={35}
                  />
                  <Button 
                    type="submit" 
                    className="bg-primary hover:bg-primary/90 transition-all"
                    disabled={searchText.length < 4}
                  >
                    <Icon name="Search" size={18} className="mr-2" />
                    Найти
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2 italic">
                  (Слова короче четырех символов не обрабатываются)
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6 animate-fade-in">
          <Card className="shadow-md hover:shadow-xl transition-shadow duration-300">
            <CardContent className="pt-6">
              <a 
                href="#vvedenie" 
                className="flex items-center gap-3 text-lg font-semibold text-primary hover:text-primary/80 transition-colors group"
              >
                <Icon name="BookOpen" size={24} className="group-hover:scale-110 transition-transform" />
                <span className="border-b-2 border-transparent group-hover:border-primary transition-all">
                  Введение
                </span>
              </a>
            </CardContent>
          </Card>

          {sections.map((section) => (
            <Card key={section.id} className="shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Library" size={24} className="text-secondary" />
                  <h3 className="text-xl font-bold text-foreground">{section.title}</h3>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-2">
                  {section.subsections.map((subsection, idx) => (
                    <AccordionItem 
                      key={subsection.id} 
                      value={subsection.id}
                      className="border rounded-lg px-4 hover:bg-muted/50 transition-colors"
                    >
                      <AccordionTrigger className="text-base font-semibold hover:no-underline py-4">
                        <div className="flex items-center gap-2">
                          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold">
                            {idx + 1}
                          </span>
                          <span className="text-left">{subsection.title}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 mt-2 ml-9">
                          {subsection.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-start gap-2 group">
                              <Icon 
                                name="ChevronRight" 
                                size={16} 
                                className="text-secondary mt-1 group-hover:translate-x-1 transition-transform flex-shrink-0" 
                              />
                              <a 
                                href={`#${subsection.id}-${itemIdx}`} 
                                className="text-muted-foreground hover:text-foreground transition-colors"
                              >
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}

          <Card className="shadow-md hover:shadow-xl transition-shadow duration-300">
            <CardContent className="pt-6">
              <a 
                href="#literatura" 
                className="flex items-center gap-3 text-lg font-semibold text-primary hover:text-primary/80 transition-colors group"
              >
                <Icon name="BookMarked" size={24} className="group-hover:scale-110 transition-transform" />
                <span className="border-b-2 border-transparent group-hover:border-primary transition-all">
                  Список использованной литературы
                </span>
              </a>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <a 
            href="#read" 
            className="inline-flex items-center gap-2 text-lg font-semibold text-secondary hover:text-secondary/80 transition-colors group"
          >
            <span>Ну что почитаем?</span>
            <Icon name="ArrowRight" size={20} className="group-hover:translate-x-2 transition-transform" />
          </a>
        </div>

        <div className="mt-8 text-right text-sm text-muted-foreground">
          <p className="font-semibold mb-1">Авторы</p>
          <p>Сазанова Т.А.</p>
          <p>Дубов А.Г.</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
