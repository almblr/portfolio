import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { projectsConfig } from "@/data/projects";

export function useProjects() {
  const { t } = useI18n();

  const projects = computed(() =>
    projectsConfig.map((config) => {

      return {
        ...config,
        name: t(`projects.${config.key}.title`),
        description: t(`projects.${config.key}.description`),
      };
    })
  );

  return { projects };
}
